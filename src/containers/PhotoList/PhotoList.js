import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardColumns, CardBody } from 'reactstrap';

class PhotoList extends React.Component {
    render() {
        return (
            <CardColumns>
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                </CardBody>
              </Card>
            </CardColumns>
        );
    }
}

export default PhotoList;
