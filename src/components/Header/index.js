import React, {Component} from 'react'
import Link from 'gatsby-link'
import './header.css'

class Header extends Component {
  constructor(props){
    super(props)
    this.state ={
      isScrolled: false
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  listenToScroll = () => {
     if(window.pageYOffset > 200){
        this.setState({isScrolled: true})
     }else{
        this.setState({isScrolled: false})
     }

  }
  render() {
    const {logo, linkedinImg, linkedinUrl, btn} = this.props;
    return (
      <header className={`${this.state.isScrolled ? 'small-header' : ''} header`}
      >
        <div className='logoWrapper'>
          <Link  className='logo' to="/">
            <img src={logo} alt=""/>
          </Link>
          <a className='linkedin' href={linkedinUrl}>
            <img src={linkedinImg} alt=""/>
          </a>
        </div>
        <button className='btn' onClick={()=>{Calendly.initPopupWidget({url: 'https://calendly.com/paul-anderie/ask-me-anything'});return false;}}>
            {btn}
        </button>
      </header>
    )
  }
}

export default Header
