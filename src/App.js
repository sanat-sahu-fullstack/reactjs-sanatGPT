const App = () => {
  const getMessages = async() => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: "hello how are you?"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const response = await fetch('http://localhost:8000/completions', options);
      const data = await response.json();
      console.log(data);
    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='app'>
      <section className='side-bar'>
        <button>+ New Chat</button>
        <ul className="history"></ul>
        <nav>
          <p>Made by sanat</p>
        </nav>
      </section>
      <section className="main">
        <h1>sanatGPT</h1>
        <ul className='feed'>

        </ul>
        <div className="bottom-section">
          <div className='input-container'>
            <input />
            <div id='submit' onClick={getMessages}>&gt;</div>
          </div>
        </div>
        <p className='info'>
        We are announcing experimental support for AI plugins in ChatGPT — tools designed specifically for language models. Plugins can help ChatGPT access up-to-date information, run computations, or use third-party services. 
        </p>
      </section>
    </div>
  );
}

export default App;
