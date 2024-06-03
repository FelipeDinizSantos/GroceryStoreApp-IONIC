import "./ShoppingList.css";
import { IonPage, IonContent } from '@ionic/react';

const ShoppingList: React.FC = () => {
    return(
        <div className="shop-container">
            <header>
                <div className="heander-location">
                    <img src="/assets/img/location-icon.png" />
                    <p>Taboão da Serra, SP</p>
                </div>
                <img src="/assets/img/user.png" />
            </header>

            <main>
                <div className="welcome">
                    <small>Seja Bem Vindo!</small>
                    <p>Vamos perdir itens fresquinhos para você?</p>
                </div>
                <h1 className="title-category">Categorias</h1>
                <article className="categories">
                    <div className="category-item fruits">
                        <img src="/assets/img/frutas.png" />
                        <span>Frutas</span>
                    </div>
                    <div className="category-item several">
                        <img src="/assets/img/diversos.png" />
                        <span>Diversos</span>
                    </div>
                    <div className="category-item butchers">
                        <img src="/assets/img/acougue.png" />
                        <span>Açougue</span>
                    </div>
                </article>

                <h1 className="title-shop">Minhas Compras</h1>
                <article className="shop-list">
                    <div className="purchase-info">
                        <div className="fruits-purchase-img">
                            <img src="/assets/img/frutas.png" />
                        </div>

                        <div className="name-date">
                            <p>FRUTAS</p>
                            <small>27/05/2024</small>
                        </div>

                        <div className="value-quantity">
                            <p>$50,00</p>
                            <small>5 itens</small>
                        </div>
                    </div>
                    <div className="purchase-info">
                        <div className="several-purchase-img">
                            <img src="/assets/img/diversos.png" />
                        </div>

                        <div className="name-date">
                            <p>Diversos</p>
                            <small>20/05/2024</small>
                        </div>

                        <div className="value-quantity">
                            <p>$35,40</p>
                            <small>6 itens</small>
                        </div>
                    </div>
                    <div className="purchase-info">
                        <div className="butchers-purchase-img">
                            <img src="/assets/img/acougue.png" />
                        </div>

                        <div className="name-date">
                            <p>Açogue</p>
                            <small>20/05/2024</small>
                        </div>

                        <div className="value-quantity">
                            <p>$56,44</p>
                            <small>3 itens</small>
                        </div>
                    </div>
                </article>
            </main>

            <footer>
                <div className="tabs"></div>
            </footer>
        </div>
    )
}

export default ShoppingList;