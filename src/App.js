import "./App.css";
import BasicJSON from "./components/Json";

function App() {
  var strOb =
    '{"type": "DeviceConfiguration","general": {"hostname": "RouterA"},"interfaces": [{"name": "lo0","type": "ethernet","addresses": [{"address": "127.0.0.1","mask": 8,"proto": "static","family": "ipv4"}]},{"name": "eth0","type": "ethernet","addresses": [{"address": "192.168.1.1","mask": 24,"proto": "static","family": "ipv4"}]}]}';

  return (
    <div className="App">
      <BasicJSON data={strOb} />
    </div>
  );
}

export default App;
