import axios from "axios";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function News() {
  // axios.get('http://localhost:3001/news').then((res) => console.log(res))
  const [news, setNews] = useState([])
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const fetchNewsData = async () => {
      setNews((await axios.get('http://localhost:3001/news')).data.data.segments)
    }

    fetchNewsData()
  }, [])

  return (
    <div> 
        <p>
            <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
              {news && (
                <div>
                  {news.map(match => <div><span>{match.title}</span><br></br><br></br></div>)}

                  {/* {mommy.map(match => <span>{match.description}</span>)} */}
                </div>
              )}
            </Modal>

            <Button variant="primary" onClick={() => setModalOpen(!modalOpen)}>
              Open News
            </Button>
        </p>
    </div>
  );
}

export default News;
