/* <div id="parent">    // ek parent ke do child;
    <div id="child1">
        <h1>hi i am h1 tag</h1>
        <h2>hi i am h2 tag
    </div>

    <div id="child2">
        <h1>hi i am h1 tag</h1>
        <h2>hi i am h2 tag
    </div>

</div> */

const parent =React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},[React.createElement("h1",{},"Hi i am H1 tag form child1"),React.createElement("h2",{},"Hi i am H2 tag from child1")]), 
    React.createElement("div",{id:"child"},[React.createElement("h1",{},"Hi i am H1 tag from child2"),React.createElement("h2",{},"Hi i am H2 tag from child2")])]
);
const root = ReactDOM.createRoot(document.getElementById("todo"));
root.render(parent);