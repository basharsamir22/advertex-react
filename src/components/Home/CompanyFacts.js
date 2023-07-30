import React from 'react'
import Title from '../Utility/Title'
import { Image } from 'react-bootstrap'
const CompanyFacts = () => {
    return (
        <div class="container Facts">
                <div class="container-facts">
                    <Title title="Company Facts" subTitle="The service we offer is specifically designed We are proud of our design team."/>
                    <div className="parent-cards-facts">
                        <div className="card-facts">
                            <div>
                                <Image src="img/facts01.png"/>
                            </div>
                            <h1>1000 +</h1>
                            <p>Completed projects</p>
                        </div>
                        <div className="card-facts">
                            <div>
                                <Image src="img/fact02.png"/>
                            </div>
                            <h1>50K +</h1>
                            <p>Happy Customers</p>
                        </div>
                        <div className="card-facts">
                            <div>
                                <Image src="img/facts03.png"/>
                            </div>
                            <h1>20 +</h1>
                            <p>Awards Won</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CompanyFacts
