

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    // Handle your click event in here
})


const ExampleClickEventComponent = () => {

    // We can pass an anonymous callback function also!
    return (
      <>
        <button onClick={(e) => console.log(e.target)}>Fire off a click event!</button>
      </>
    );
}



const EventExample = () => {
    return (
        <section>
            <form>
                <h2>Some Form</h2>
                <input
                type='text'
                name='example'
                onChange={handleFormInput}
                style={{margin: '1rem 0'}} />
                <button type='submit'>Submit</button>
            </form>
            <button onClick={handleButtonClick}>Click Me!</button>
        </section>
    )
}

