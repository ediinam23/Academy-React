import Title from "./components/title/Title";
import Links from "./components/links/Links";
import './App.css'
import MyList from "./components/myList/MyList.jsx";

function App() {
    const list = [
        {title: 'Mobile apps development', visible: true},
        {title: 'Website development', visible: false},
        {title: 'SaaS', visible: true},
        {title: 'Via', visible: false},
        {title: 'Shift', visible: true}
    ]

  return (
      <div>
      <Links/>
      <h1></h1>
      <Title text="Vite + React" hello="Edina"/>
      <Title text="This is a title!"/>

      <MyList list={list}/>
      <h3>Example 2</h3>
      <MyList list={list.filter(item => item.visible)}/>
      </div>

  )
}

export default App
