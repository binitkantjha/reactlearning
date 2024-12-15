
{/* <div id="parent">
  <div id="child1" >
      <h1>this is h1</h1>
      <h2>this is h2</h2>
  </div>
  <div id="child2" >
    <h1>this is h1</h1>
    <h2>this is h2</h2>
</div>

</div> */}


const heading = React.createElement("div", {id: parent}, 
  [  React.createElement("div", {id: "child1"},  
    [React.createElement("h1", {}, "this is h1"), React.createElement("h2", {}, "this is h2")]),
    React.createElement("div", {id: "child2"},  
    [React.createElement("h1", {}, "this is h1"), React.createElement("h2", {}, "this is h2")])])
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(heading)