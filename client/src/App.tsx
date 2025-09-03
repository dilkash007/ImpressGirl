import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Gallery from "@/pages/gallery";
import FirstMeeting from "@/pages/poetry/first-meeting";
import YourSmile from "@/pages/poetry/your-smile";
import DreamsTogether from "@/pages/poetry/dreams-together";
import MissingYou from "@/pages/poetry/missing-you";
import YourEyes from "@/pages/poetry/your-eyes";
import PromiseOfLove from "@/pages/poetry/promise-of-love";
import MorningSunshine from "@/pages/poetry/morning-sunshine";
import DanceOfLove from "@/pages/poetry/dance-of-love";
import ForeverYours from "@/pages/poetry/forever-yours";
import MyQueen from "@/pages/poetry/my-queen";
import MoonlitNights from "@/pages/poetry/moonlit-nights";
import GardenOfLove from "@/pages/poetry/garden-of-love";
import FloatingHearts from "@/components/floating-hearts";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/poetry/first-meeting" component={FirstMeeting} />
      <Route path="/poetry/your-smile" component={YourSmile} />
      <Route path="/poetry/dreams-together" component={DreamsTogether} />
      <Route path="/poetry/missing-you" component={MissingYou} />
      <Route path="/poetry/your-eyes" component={YourEyes} />
      <Route path="/poetry/promise-of-love" component={PromiseOfLove} />
      <Route path="/poetry/morning-sunshine" component={MorningSunshine} />
      <Route path="/poetry/dance-of-love" component={DanceOfLove} />
      <Route path="/poetry/forever-yours" component={ForeverYours} />
      <Route path="/poetry/my-queen" component={MyQueen} />
      <Route path="/poetry/moonlit-nights" component={MoonlitNights} />
      <Route path="/poetry/garden-of-love" component={GardenOfLove} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <FloatingHearts />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
