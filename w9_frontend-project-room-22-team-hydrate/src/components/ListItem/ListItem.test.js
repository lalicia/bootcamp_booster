import React from "react";
import {getByRole, render, screen} from "@testing-library/react";
import ListItem from "./ListItem";


test("tests that ListItem renders", function (){
    render(<ListItem />)
    expect(screen.getByRole('listitem')).toBeInTheDocument();
})