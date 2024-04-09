import React from "react";
import Header from './Header';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';

class TrelloBoard extends React.Component {

    render() {
        
        const cards = [
            {
                title: 'Ticket 1',
                desc: 'User added successfully.'
            },
            {
                title: 'Ticket 2',
                desc: 'Please remove this user.'
            },
            {
                title: 'Ticket 3',
                desc: 'Aman added successfully.'
            },
            {
                title: 'Ticket 4',
                desc: 'Removed Prashant successfully.'
            },
            {
                title: 'Ticket 5',
                desc: 'Removed Aman successfully.'
            }
        ];

        
    return (
            <div>
                <Header />
                <div className='p-2'>
                    {
                        cards.map((card) => {
                            const cardId = uuidv4();
                            return (
                                <Card title={card.title} desc={card.desc} key={cardId} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default TrelloBoard;