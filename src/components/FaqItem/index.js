import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  onClickFaq = () => {
    const {updateVisibleFaqs, faqItemData} = this.props
    updateVisibleFaqs(faqItemData.id)
  }

  render() {
    const {faqItemData, visibleFaqs} = this.props
    const {questionText, id, answerText} = faqItemData
    const isActiveId = visibleFaqs.includes(id)
    const faqButton = isActiveId
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const answerVisibility = isActiveId ? '' : 'invisible'
    const faqButtonAlt = isActiveId ? 'minus' : 'plus'
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
