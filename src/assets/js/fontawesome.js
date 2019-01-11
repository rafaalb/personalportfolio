import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faIgloo,
  faBirthdayCake,
  faPhoneSquare,
  faEnvelopeSquare
} from '@fortawesome/free-solid-svg-icons'
import {
  faReact,
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faGrunt,
  faAngular,
  faNode,
  faGit,
  faPython,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

// we load here only the necesary icons so we avoid overloading the bundle with all the icons

library.add(
  faIgloo,
  faReact,
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faGrunt,
  faAngular,
  faNode,
  faGit,
  faPython,
  faBirthdayCake,
  faPhoneSquare,
  faEnvelopeSquare,
  faGithub
)