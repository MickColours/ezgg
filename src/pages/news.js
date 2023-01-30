import axios from "axios";

const mom = axios.get('https://vlrggapi.vercel.app/')

function News() {
  return (
    <div> 
        <p>
            {mom.data}
        </p>
    </div>
  );
}

export default News;
