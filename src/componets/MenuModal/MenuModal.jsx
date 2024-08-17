import React, { Component } from "react";
// import styled from "styled-components";
import ShowBtn from "../Btn/ShowBtn";
// import HideBtn from "../Btn/HideBtn";


export default class MenuModal extends Component {

    static defaultValues = {
        showStart: false,
    };


    state = {
        show: this.props.showStart,
    };


    show = () => {
        this.setState(

            (prevState) => ({show: !prevState.show}),
            // (prevCount) => {
            //     if (prevCount.showStart !== prevCount.showStart) {
            //         // prevCount.showStart = true;
            //         // console.log("Все працює (show)");
            //         return {

            //             show: !prevCount.showStart,
            //         };
            //     } else {
            //         // prevCount.showStart = false;
            //         // console.log("Все працює (hide)");
            //         return {

            //             show: prevCount.showStart,
            //         };
            //     }
            // prevCount.showStart = true;
            // return {

            //     show: prevCount.showStart,
            // };
            // },
            () => {
                console.log("Все працює (show)");
            }
        );
    };

    // hide = () => {
    //     this.setState(
    //         (prevCount) => {
    //             prevCount.showStart = "false";
    //             return {

    //                 show: prevCount.showStart,
    //             };
    //         },
    //         () => {
    //             console.log("Все працює (hide)");
    //         }
    //     );
    // };


    render() {

        const { show } = this.state
        return (
            <>
                <ShowBtn showMenu={this.show}></ShowBtn>

                {show
                    ?
                    <div>
                        <ul>
                            <li key={1}>
                                1
                            </li>
                            <li key={2}>
                                2
                            </li>
                            <li key={3}>
                                3
                            </li>
                        </ul>
                    </div>
                    : <div>
                        <p>Сховано</p>
                    </div>
                }



            </>
        );
    };

};