import Counter from "./components/Counter";

function App() {
    const Posts = [
        {
            id: 1,
            title: 'title 1',
            text: 'lorem loremlorem loremloremloremlorem loremloremlorem lorem',
        },
        {
            id: 2,
            title: 'title 2',
            text: 'lorem loremlorem loremloremloremlorem loremloremlorem lorem',
        },
        {
            id: 3,
            title: 'title 3',
            text: 'lorem loremlorem loremloremloremlorem loremloremlorem lorem',
        },
    ];

    return (
        <div>
            counter
            <Counter props={Posts}/>
        </div>
    );
}

export default App;
