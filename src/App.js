import { ThemeProvider } from "styled-components";
import { FlexCard } from "./components/styles/Card.styles";
import Card from "./components/Card";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styles";
import GlobalStyles from "./components/styles/Global";
import axios from "axios";
import { useState, useEffect } from "react";
import Select from "./components/Select";
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
  },
};
function App() {
  async function fetchCards() {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    // const response = await axios.get("https://restcountries.com/v2/all");
    setCards(response.data);
  }
  useEffect(() => {
    fetchCards();
  }, []);
  const [cards, setCards] = useState([]);
  // const [selectedSort, setSelectedSort] = useState("");

  // const sortCards = (sort) => {
  //   setSelectedSort(sort);
  //   console.log(sort);
  //   setCards(
  //     [...cards].sort((a, b) => {
  //       if (a[sort]) {
  //         a[sort].localeCompare(b[sort]);
  //       }
  //     })
  //   );
  // };

  /////testez search
  const [search, setSearch] = useState("");
  const [filterName, setFilterName] = useState([]);

  useEffect(() => {
    setFilterName(
      cards.filter((ceva) => {
        // console.log(typeof JSON.stringify(ceva.capital));
        // console.log(JSON.stringify(ceva.fifa));
        // console.log(ceva.capital.join());
        // console.log(ceva.fifa);
        if (ceva.capital && ceva.fifa) {
          // console.log(ceva.capital.join());
          return (
            // // console.log(ceva.capital);
            ceva.name.common.toLowerCase().includes(search.toLowerCase()) ||
            ceva.capital.join().toLowerCase().includes(search.toLowerCase()) ||
            ceva.fifa.toLowerCase().includes(search.toLowerCase())
          );
        } else {
          return false;
        }
      })
    );
  }, [cards, search]);
  /////search
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header></Header>
      <Container>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>
          {/* <Select
            value={selectedSort}
            onChange={sortCards}
            defaultValue="Sort"
            options={[
              { value: "name.common", name: "Sort by Name" },
              { value: "fifa", name: "Sort by Code" },
              { value: "capital", name: "Sort by Capital" },
            ]}
          /> */}
        </div>
        <FlexCard>
          {filterName.map((card, index) => (
            <Card {...card} key={index} />
          ))}
        </FlexCard>
      </Container>
    </ThemeProvider>
  );
}

export default App;
