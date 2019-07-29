import React from 'react'
import Header from './Header';
import Body from './Layout';


class Home extends React.Component {
    render(){
        return(
            <Body>
                <Header />
                <main className='home-content'>
                    <article>
                        {/* Log in, go to dashboard */}
                        Placeholder text
                    </article>
                </main>
            </Body>
        )
    }
}

export default Home