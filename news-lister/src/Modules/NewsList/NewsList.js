import { useState } from 'react'
import withLoader from '../../shared/HOC/withLoader'
import { fetchData } from '../../Utils/httpService';
import List from '../../shared/componentes/List'

const NewsList = (props) => {
    const { setLoading } = props;
    const [serachKeyword, setSerachKeyword] = useState('');
    const [newsData, setNewsData] = useState({})
    const handleSerach = async(paginationParams = {}) => {
        if(serachKeyword !== '') {
            const {page = 1} = paginationParams;
            setLoading(true);
            const url = `&q=${serachKeyword}&show-fields=thumbnail,headline&fields=thumbnail,headline&show-tags=keyword&page=${page}&page-size=10`;
            const { response } = await fetchData(url);
            setLoading(false);
            setNewsData(response)
        }
    }

    return (
        <>
            <h2>New Lister</h2>
            <form onSubmit={(e) => {e.preventDefault(); handleSerach();}}>
                Enter search text here <input type="text" value={serachKeyword} onChange={(e) => setSerachKeyword(e.target.value)} /> <button onClick={handleSerach}>Search</button>
                <p style={{color: 'red'}}>{serachKeyword === '' && 'You must enter a search text'}</p>
            </form>
            {newsData?.total === 0 ? "No result found !" : <List data={newsData} onPaginationClick={handleSerach} />}
        </>
    )

}

export default withLoader(NewsList);