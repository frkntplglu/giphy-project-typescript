import React, {useState, useEffect,ChangeEvent, useCallback, useRef} from 'react';
import Header from "./components/Header"
import Home from "./pages/Home"
import useFetch from "./hooks/useFetch"

function App() {
  const [offset, setOffset] = useState(0);
  const [query, setQuery] = useState("");
  const [input, setInput] = useState<string>("");
  const [select, setSelect] = useState<string>("");

  const {list, resetList} = useFetch(query, offset);

  const loadRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleInput = (e: ChangeEvent<HTMLInputElement>) : void => {
      setInput(e.target.value);
      setSelect("0")
  }

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) : void => {
      setInput("");
      setSelect(e.target.value)
  }

  const handleClick = () => {
      if(input.length > 0 && input.length < 3){
          alert("Query cannot be smaller than 3 characters");
          return;
      }
      resetList();
      setOffset(0);
      if(select === "0"){
        setQuery(input);
      }else{
        setQuery(select);
      }
  }

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting ) {
      console.log("intersected")
      setOffset((prev) => prev + 25);
    }
  }, []);


  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loadRef.current) observer.observe(loadRef.current);
    return () => {
      observer.disconnect();
    }

    
  },[handleObserver, list])
  return (
    <div className="App">
      <Header 
        handleClick={handleClick}
        handleSelect={handleSelect} 
        handleInput={handleInput} 
        inputValue={input} 
        selectValue={select} />
      <Home gifs={list} />
      {list.length > 0 ? <div ref={loadRef} style={{color: "#fff"}}>Loading...</div> : null}
    </div>
  );
}

export default App;
