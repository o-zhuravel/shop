import './AdminPanel.css';

function deleteProd () {

}

const AdminPanel = () => {
    return (
        <div className='Admin-panel'>
            <p>Put id</p>
            <input name='deleteProdId' type='number' />
            <button onClick={deleteProd}>delete</button>
        </div>
    )
}

export default AdminPanel;