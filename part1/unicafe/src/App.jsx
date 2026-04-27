import { useState } from 'react'
const Header = ({title}) => {
  return <h2>{title}</h2>
}
const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}
const StatisticsLine = (props) => {
  const {text, value} = props;
  return (
    <tr>
      <td>{text} {value}</td>
    </tr>
)
}
const Statistics = (props) => {
  const {good, neutral, positive, bad, average, all} = props;
  if (all === 0){
    return <p>No feedback given</p>
  }

  return (
    <table>
      <StatisticsLine text="good" value={good}/>
      <StatisticsLine text="neutral" value={neutral}/>
      <StatisticsLine text="bad" value={bad}/>
      <StatisticsLine text="all" value={all}/>
      <StatisticsLine text="average" value={average}/>
      <StatisticsLine text="positive" value={positive}/>
    </table>
    
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const average = all/9;
  const positive = good/all * 100 || 0;

  return (
    <div>
      <Header title="give feedback"/>
      <Button handleClick={()=> setGood(good + 1)} text="good" />
      <Button handleClick={()=> setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={()=> setBad(bad + 1)} text="bad" />
      <h2>statistics</h2>
      <Statistics 
        good={good}
        bad={bad}
        neutral={neutral}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App