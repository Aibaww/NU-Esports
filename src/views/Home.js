import Header from '../components/Header';
import '../assets/Home.css';

function Home() {
	return(
		<div className="Home">
			<Header />
			<div className='Home-title'>
				<h1>NUEsports</h1>
				<p>
					Northwestern's student organization for casual and competitive video gaming.
				</p>
			</div>
		</div>
	)
}

export default Home;