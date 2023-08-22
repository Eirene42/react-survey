import { useState } from "react";
import AnswersList from "./AnswersList";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

    const [formData, setFormData] = useState({
    color: '', consistency: '', logo: '', spendTime: [], bestFeatures: [], worstBits: [], review: '', username: '', email: ''})

    const [submittedAnswers, setSubmittedAnswers] = useState([]);

    const handleChange = (event) => {
      const {name, value} = event.target
      setFormData({...formData, [name]: value})
    }

    const handleChecks = (event, field) => {
      const {value, checked} = event.target
      const updatedField = [...formData[field]]
      if (checked) {
        updatedField.push(value)
      } else {
        const index = updatedField.indexOf(value);
        if (index !== -1) {
          updatedField.splice(index, 1);
        }
      }
      setFormData({...formData, [field]: updatedField})
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      setSubmittedAnswers([...submittedAnswers, formData]);


      setFormData({
        color: "",
        consistency: "",
        logo: "",
        spendTime: [],
        bestFeatures: [],
        worstBits: [],
        review: "",
        username: "",
        email: "",
      });
    }

    console.log("saaaaaaaaaaaa", submittedAnswers)

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList = {submittedAnswers} />
      </section>
      <section className="main__form">
      <form class="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div class="form__group">
        <h3>How would you say that are the best features of your rubber duck?</h3>
        <ul>
        <li>
          <label
            ><input
              name="bestFeatures"
              type="checkbox"
              value="It's yellow!"
              checked={formData.bestFeatures.includes("It's yellow!")}
              onChange={(event) => handleChecks(event, "bestFeatures")}
            />It's yellow!</label
          >
        </li>
        <li>
          <label
            ><input 
            name="bestFeatures" 
            type="checkbox" 
            value="It squeaks!" 
            checked={formData.bestFeatures.includes("It squeaks!")}
            onChange={(event) => handleChecks(event, "bestFeatures")} 
            />It squeaks!</label
          >
        </li>
        <li>
          <label
            ><input
              name="bestFeatures"
              type="checkbox"
              value="It has a logo!"
              checked={formData.bestFeatures.includes("It has a logo!")}
              onChange={(event) => handleChecks(event, "bestFeatures")}
            />It has a logo!</label
          >
        </li>
        <li>
          <label
            ><input 
            name="bestFeatures" 
            type="checkbox" 
            value="It's big!"
            checked={formData.bestFeatures.includes("It's big!")}
            onChange={(event) => handleChecks(event, "bestFeatures")}
             />It's big!</label
          >
        </li>
      </ul>
      </div>
      <div class="form__group">
        <h3>How would you say that are the worst bits of your rubber duck?</h3>
        <ul>
        <li>
          <label
            ><input
              name="worstBits"
              type="checkbox"
              value="It's yellow!"
              checked={formData.worstBits.includes("It's yellow!")}
              onChange={(event) => handleChecks(event, "worstBits")}
            />It's yellow!</label
          >
        </li>
        <li>
          <label
            ><input 
            name="worstBits" 
            type="checkbox" 
            value="It squeaks!" 
            checked={formData.worstBits.includes("It squeaks!")}
            onChange={(event) => handleChecks(event, "worstBits")} 
            />It squeaks!</label
          >
        </li>
        <li>
          <label
            ><input
              name="worstBits"
              type="checkbox"
              value="It has a logo!"
              checked={formData.worstBits.includes("It has a logo!")}
              onChange={(event) => handleChecks(event, "worstBits")}
            />It has a logo!</label
          >
        </li>
        <li>
          <label
            ><input 
            name="worstBits" 
            type="checkbox" 
            value="It's big!"
            checked={formData.worstBits.includes("It's big!")}
            onChange={(event) => handleChecks(event, "worstBits")}
             />It's big!</label
          >
        </li>
      </ul>
      </div>
      <div class="form__group radio">
        <h3>How do you rate your rubber duck consistency?</h3>
        <ul>
          <li>
            <input id="consistency-one" type="radio" name="consistency" value="1" checked={formData.consistency === '1'} onChange={handleChange} /><label
              for="consistency-one"
              >1</label>
          </li>
          <li>
            <input id="consistency-two" type="radio" name="consistency" value="2" checked={formData.consistency === '2'} onChange={handleChange} /><label
              for="consistency-two"
              >2</label>
          </li>
          <li>
            <input id="consistency-three" type="radio" name="consistency" value="3" checked={formData.consistency === '3'} onChange={handleChange} /><label
              for="consistency-three"
              >3</label>
          </li>
          <li>
            <input id="consistency-four" type="radio" name="color" value="4" checked={formData.consistency === '4'} onChange={handleChange} />
            <label
              for="consistency-four"
              >4</label>
          </li>
        </ul>
      </div>
      <div class="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <ul>
          <li>
            <input id="color-one" type="radio" name="color" value="1" checked={formData.color === '1'} onChange={handleChange} /><label
              for="color-one"
              >1</label>
          </li>
          <li>
            <input id="color-two" type="radio" name="color" value="2" checked={formData.color === '2'} onChange={handleChange} /><label
              for="color-two"
              >2</label>
          </li>
          <li>
            <input id="color-three" type="radio" name="color" value="3" checked={formData.color === '3'} onChange={handleChange} /><label
              for="color-three"
              >3</label>
          </li>
          <li>
            <input id="color-four" type="radio" name="color" value="4" checked={formData.color === '4'} onChange={handleChange} />
            <label
              for="color-four"
              >4</label>
          </li>
        </ul>
      </div>
      <div class="form__group radio">
        <h3>How do you rate your rubber duck logo?</h3>
        <ul>
          <li>
            <input id="logo-one" type="radio" name="logo" value="1" checked={formData.logo === '1'} onChange={handleChange} /><label
              for="logo-one"
              >1</label>
          </li>
          <li>
            <input id="logo-two" type="radio" name="logo" value="2" checked={formData.logo === '2'} onChange={handleChange} /><label
              for="logo-two"
              >2</label>
          </li>
          <li>
            <input id="logo-three" type="radio" name="logo" value="3" checked={formData.logo === '3'} onChange={handleChange} /><label
              for="logo-three"
              >3</label>
          </li>
          <li>
            <input id="logo-four" type="radio" name="logo" value="4" checked={formData.logo === '4'} onChange={handleChange} />
            <label
              for="logo-four"
              >4</label>
          </li>
        </ul>
      </div>
      <div class="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <ul>
        <li>
          <label
            ><input
              name="spendTime"
              type="checkbox"
              value="swimming"
              checked={formData.spendTime.includes("swimming")}
              onChange={(event) => handleChecks(event, "spendTime")}
            />Swimming</label
          >
        </li>
        <li>
          <label
            ><input 
            name="spendTime" 
            type="checkbox" 
            value="bathing" 
            checked={formData.spendTime.includes("bathing")}
            onChange={(event) => handleChecks(event, "spendTime")} 
            />Bathing</label>
        </li>
        <li>
          <label
            ><input
              name="spendTime"
              type="checkbox"
              value="chatting"
              checked={formData.spendTime.includes("chatting")}
              onChange={(event) => handleChecks(event, "spendTime")}
            />Chatting</label>
        </li>
        <li>
          <label
            ><input 
            name="spendTime" 
            type="checkbox" 
            value="noTime"
            checked={formData.spendTime.includes("noTime")}
            onChange={(event) => handleChecks(event, "spendTime")}
             />I don't like to
            spend time with it</label
          >
        </li>
      </ul>
      </div>
      <label
        >What else have you got to say about your rubber duck?<textarea
          name="review"
          cols="30"
          rows="10"
          value={formData.review}
          onChange={handleChange}
        ></textarea></label
      ><label
        >Put your name here (if you feel like it):<input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange} /></label
      ><label
        >Leave us your email pretty please??<input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange} /></label
      ><input class="form__submit" type="submit" value="Submit Survey!" />
    </form>
    </section>
    </main>
  );
}

export default Main;
