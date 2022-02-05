import React from 'react';
import CreateItem from '../../components/Items/CreateItem';
import ManekinForm from '../../components/Manekins/ManekinForm';

export default function createForm() {
    return (
        <div>
            <CreateItem />
            <ManekinForm />
        </div>
    );
}
