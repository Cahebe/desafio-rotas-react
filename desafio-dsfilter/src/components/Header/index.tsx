import './styles.css';
import { useContext } from "react";
import { ContextListSize } from "../../utils/context-list-size";

export default function Header() {

    const {contextListSize} = useContext(ContextListSize);

    return (
        <header>
            <div className='header-container'>
                <h2>DSFilter</h2>
                <p>{contextListSize} produtos</p>
            </div>
        </header>
    );
}