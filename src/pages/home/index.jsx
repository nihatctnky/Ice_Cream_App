import CartButton from "../../components/Buttons/cart-button"
import Hero from "../../components/hero"
import List from "../../components/list"
import TrendButton from '../../components/Buttons/trend-button';



const Home = () => {
    return (
        <div className="relative">
            <Hero />



            <CartButton />
            <TrendButton />



            <List />
        </div>
    )
}

export default Home