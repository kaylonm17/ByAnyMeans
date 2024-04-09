import { ColorModeContext, useMode } from "./theme";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import FAQ from "./scenes/faq";
import Calendar from "./scenes/calendar";
import Todo from "./scenes/todo";
import Signin from "./scenes/signin";
import Feedback from "./scenes/feedback";
import Chat from "./scenes/chat";



function App () {
  const[theme, colorMode] = useMode();

  return (<ColorModeContext.Provider value={colorMode}>
    <ThemeProvier theme={theme}>
      <CssBaseline />
      <div calssName="app">
        <Sidebar/>
        <main className="content">
          <Topbar/>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/team" element={<Team/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="invoices/" element={<Invoices/>}/>
            <Route path="/form" element={<Form/>}/>
            <Route path="/faq" element={<FAQ/>}/>
            <Route path="/calendar" element={<Calendar/>}/>
            <Route path="/todo" element={<Todo/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/feedback" element={<Feedback/>}/>
            <Route path="/chat" element={<Chat/>}/>
          </Routes>
        </main>
      </div>
    </ThemeProvier>
  </ColorModeContext.Provider>
  );
}

export default App;