import './Home.css'
import logo from '../../assets/img/logo1.png'
const Home = () => {
    return (
        <div className='Home'>
            <h1>NAME</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur ea enim harum impedit incidunt, nobis numquam obcaecati pariatur perferendis, perspiciatis placeat possimus qui quibusdam reiciendis sequi similique temporibus, voluptatum? Blanditiis itaque maiores nam nihil odio qui quis reprehenderit tempore unde voluptatibus. Accusantium beatae eligendi explicabo fugit laudantium, molestiae quia repellat similique! Consectetur distinctio eligendi hic illo incidunt labore laboriosam maiores neque nihil nisi perferendis, quaerat qui quod tempore ut vel veritatis voluptas voluptatum? Asperiores aspernatur debitis delectus deserunt dicta dignissimos doloremque, eaque eos esse expedita illo ipsam ipsum magni maxime modi natus non porro quam quisquam temporibus? Exercitationem, veniam.</p>
            <div>
                <img src={logo} alt='logo'/>
            </div>
        </div>
    )
}

export default Home;