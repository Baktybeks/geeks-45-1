import React from 'react';
import Header from '../components/header/Header';
import { Footer, Footer2 } from '../components/footer/Footer';
import Button from '../components/button/Button';
import Person from '../components/person/Person';

const MainPage = () => {
    return (
        <div>
            <Person name='Bakyt' age={18} address={'Bishkek'}/>
            <Person name='Kuban' age={15} address={'Naryn'}/>
            <Header/>
            <Footer/>
            <Footer2/>
            <Button name='save' color='confirm'/>
            <Button name='delete' color='error'/>
            <Button name='edit' color='default'/>
        </div>
    );
};

export default MainPage;