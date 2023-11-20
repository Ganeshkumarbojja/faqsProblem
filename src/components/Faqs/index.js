import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {visibleFaqs: []}

  updateVisibleFaqs = id => {
    const {visibleFaqs} = this.state
    if (visibleFaqs.includes(id) === true) {
      this.setState(prevState => ({
        visibleFaqs: prevState.visibleFaqs.filter(faqId => faqId !== id),
      }))
    } else {
      this.setState(prevState => ({
        visibleFaqs: [...prevState.visibleFaqs, id],
      }))
    }
  }

  render() {
    const {faqsList} = this.props
    const {visibleFaqs} = this.state
    return (
      <div className="app-container">
        <div className="app-card">
          <h1 className="app-head">FAQs</h1>
          <ul className="faqs-list">
            {faqsList.map(item => (
              <FaqItem
                faqItemData={item}
                key={item.id}
                visibleFaqs={visibleFaqs}
                updateVisibleFaqs={this.updateVisibleFaqs}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
