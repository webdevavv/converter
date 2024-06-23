import {Box, Button, FormControl, MenuItem, Select} from "@mui/material";
import {useState} from "react";
import bsc from "../assets/BSC.png"
import copy from "../assets/copy.svg"
import add from "../assets/add.png"

const ConverterBlock = () => {

    const [platform, setPlatform] = useState('');

    const handleChange = (event) => {
        setPlatform(event.target.value);
    };

    return (
        <Box
            className="converter_block"
            display="flex"
            flexDirection="column"
            sx={{gap: "28px"}}
        >
            <div className="select_platform">
                <FormControl sx={{m: 1, width: "100%"}}>
                    <Select
                        value={platform}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{'aria-label': 'Without label'}}
                    >
                        <MenuItem value="">
                            <span><img src={bsc}/></span>
                            <span className="name">BSC</span>
                        </MenuItem>
                        <MenuItem value={10}>
                            <span><img src={bsc}/></span>
                            <span className="name">BSC</span>
                        </MenuItem>
                        <MenuItem value={20}>
                            <span><img src={bsc}/></span>
                            <span className="name">BSC</span>
                        </MenuItem>
                        <MenuItem value={30}>
                            <span><img src={bsc}/></span>
                            <span className="name">BSC</span>
                        </MenuItem>
                    </Select>
                </FormControl>
                <div className="converter_block__item"></div>
                <div className="converter_block__info">
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="buttons">
                <div className="text_block">
                    To purchase $RAX confirm 2 transactions: 1) Approve token balance. 2) Buy RAX, If no transactions are received to your wallet, reconnect the wallet to the launchpad
                </div>
                <div className="button">
                    <Button variant="contained">Buy $RAX</Button>
                </div>
                <div className="buttons_block">
                    <Button variant="contained">
                        <span>
                            <img src={bsc} alt=""/>
                        </span>
                        <span>
                            <span className="lable">BSC: </span>
                             0xBbc...6F9
                        </span>
                        <span>
                            <img src={copy} alt=""/>
                        </span>
                    </Button>
                    <Button variant="contained">
                        <span>
                            <img src={add} alt=""/>
                        </span>
                        <span>Add to CMC Watchlist</span>
                    </Button>
                    <Button variant="contained">
                        <span>
                            <span className="accent">Vesting:</span>
                            10% on TGE / 3m cliff / Linear unlock 12m (15m total)
                        </span>
                    </Button>
                </div>
            </div>
        </Box>
    );
};

export default ConverterBlock;