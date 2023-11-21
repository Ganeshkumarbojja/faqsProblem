import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isIconClicked: false}

  onClickFaq = () => {
    this.setState(prevState => ({isIconClicked: !prevState.isIconClicked}))
  }

  render() {
    const {faqItemData} = this.props
    const {questionText, answerText} = faqItemData
    const {isIconClicked} = this.state
    const faqButton = isIconClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const answerVisibility = isIconClicked ? '' : 'invisible'
    const faqButtonAlt = isIconClicked ? 'minus' : 'plus'
    return (
      <li className="faq-item">
        <div className="faq-question-container">
          <h1 className="faq-question">{questionText}</h1>
          <img
            src={faqButton}
            alt={faqButtonAlt}
            className="faq-button"
            onClick={this.onClickFaq}
          />
        </div>
        <p className={`faq-answer ${answerVisibility}`}>{answerText}</p>
      </li>
    )
  }
}

export default FaqItem
