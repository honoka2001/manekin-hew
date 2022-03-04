import React from 'react';
import CreateItem from '../../components/Items/ItemForm';
import ManekinForm from '../../components/Manekins/ManekinForm';
import Header from '../../components/Header/Header';

export default function createForm() {
    return (
        <div>
            <Header />
            <div className="flex overflow-x-auto space-x-2 w-full bg-yellow-400 box-border pt-5">
                <CreateItem />
                <ManekinForm />
            </div>
        </div>
    );
}
