import React from 'react'
import { Transition, config } from 'react-spring'
import { Main, Container, Message, Button, Content, Life, Pineapple } from '../assets/js/styled'
import pineapple from '../images/pineapple.png'

let id = 0
let spring = { ...config.default, precision: 0.1 }
let generateMsg = () => ({ key: id++, msg: `Thanks for contacting! I\'ll reach out to you soon!` })

export default class MessageHub extends React.PureComponent {
  state = { items: [] }
  cancelMap = new WeakMap()
  add = () =>
    this.setState(state => ({ items: [...state.items, generateMsg()] }))
  remove = item =>
    this.setState(state => ({
      items: state.items.filter(i => i.key !== item.key),
    }))
  config = (item, state) =>
    state === 'leave' ? [{ duration: 4000 }, spring, spring] : spring
  cancel = item => this.cancelMap.has(item) && this.cancelMap.get(item)()
  leave = item => async (next, cancel) => {
    this.cancelMap.set(item, cancel)
    await next({ life: '0%' })
    await next({ opacity: 0 })
    await next({ height: 0 }, true) // Inform Keyframes that is is the last frame
  }
  componentDidMount() {
    this.add()
  }
  render() {
    return (
      <Container>
        <Transition
          native
          items={this.state.items}
          keys={item => item.key}
          from={{ opacity: 0, height: 0, life: '100%' }}
          enter={{ opacity: 1, height: 'auto' }}
          leave={this.leave}
          onRest={this.remove}
          config={this.config}>
          {item => ({ life, ...props }) => (
            <Message style={props}>
              <Content>
                <Life style={{ right: life }} />
                <span>
                  <span>{'Thanks for contacting'}</span>
                  <br />
                  {`I'll reach out to you soon`}
                </span>
                <Pineapple>
                  <img src={pineapple} alt="pineapple image" />
                </Pineapple>
              </Content>
            </Message>
          )}
        </Transition>
      </Container>
    )
  }
}