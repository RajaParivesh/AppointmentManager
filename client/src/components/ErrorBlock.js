import React, {Fragment} from "react";
import Box from "@material-ui/core/Box";

function ErrorBlock({error}) {
    if (!error) return <Fragment />;
    return (
        <Box mt={8} style={{"background":"red"}}>
            {error}
        </Box>
    );
}

export default ErrorBlock;

