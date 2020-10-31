import React, {useEffect} from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import {Box, Card, CardHeader, CardBody, CardFooter, Heading} from 'grommet'

function EquationsList(props) {

    const dispatch = useDispatch();

    const allOfRedux = useSelector(state => state.equations);

    useEffect((props) => {
        dispatch({type: 'GET_EQUATIONS'})
    }, [])

    return(
        <Box style={{paddingTop: 20}}>
            <Card style={{width:500}}>
                <CardHeader pad="small" background="light-2"><Heading level="3">Equations</Heading></CardHeader>
                <CardBody pad="small" background="light-1">
                    <ol>
                        {allOfRedux.map(equation => (
                            <Heading level="5" key={equation.id}><li>{equation.equation} = {equation.answer}</li></Heading>
                        ))}
                    </ol>
                </CardBody>
                <CardFooter pad="small" background="light-2">
                    <Heading level="6">By: Sam Maus</Heading>      
                </CardFooter>
            </Card>
        </Box>
    )
}

export default EquationsList;