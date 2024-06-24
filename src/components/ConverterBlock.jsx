import {Box, Button, FormControl, MenuItem, Select} from "@mui/material";
import {useState} from "react";
import bsc from "../assets/BSC.png"
import copy from "../assets/copy.svg"
import add from "../assets/add.png"
import usdt from "../assets/usdt.png"
import monogram from "../assets/monogram.png"

const ConverterBlock = () => {

    const [platform, setPlatform] = useState('');
    const [currency, setCurrency] = useState('');

    const handleChange = (event) => {
        setPlatform(event.target.value);
    };
    const handleChangeCurrency = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <Box
            className="converter_block"
            display="flex"
            flexDirection="column"
            sx={{gap: "28px"}}
        >
            <div className="select_platform">
                <FormControl sx={{m: 1, width: "100%"}} className="select_platform_block">
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
                <div className="converter_block__items">
                    <div className="converter_block__item">
                        <span className="lable">You Pay</span>
                        <div className="converter_block__input">
                            <FormControl sx={{ minWidth: 60 }}>
                                <Select
                                    value={currency}
                                    onChange={handleChangeCurrency}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <img src={usdt} alt=""/>
                                    </MenuItem>
                                    <MenuItem value={10}>
                                        <img src={monogram} alt=""/>
                                    </MenuItem>
                                    <MenuItem value={20}>
                                        <img src={usdt} alt=""/>
                                    </MenuItem>
                                </Select>
                            </FormControl>
                            <input type="number" placeholder="0" />
                        </div>
                    </div>
                    <div className="converter_block_image">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8 0.829167L15.5854 8.41458L8 16L6.46459 14.4875L11.4375 9.49167L0.414587 9.49167L0.414587 7.3375L11.4375 7.3375L6.46458 2.36458L8 0.829167Z"
                                fill="#62646E"/>
                        </svg>
                    </div>
                    <div className="converter_block__item">
                        <span className="lable">You Recieve</span>
                        <div className="converter_block__input" style={{paddingLeft: "20px"}}>
                            <span>
                                <img src={monogram} alt=""/>
                            </span>
                            <input type="number" placeholder="0"/>
                        </div>
                    </div>
                </div>
                <div className="converter_block__info">
                    <div>
                        <span>1 RAX = <strong>$0.025</strong></span>
                        <span>
                            Next Price = <strong>$0.05</strong>
                            <span className="percent">+100%</span>
                        </span>
                    </div>
                    <div>
                        <span style={{color: "#878892"}}>MIN <strong>$10</strong> MAX <strong>$20,000</strong></span>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <div className="text_block">
                    To purchase $RAX confirm 2 transactions: 1) Approve token balance. 2) Buy RAX, If no transactions
                    are received to your wallet, reconnect the wallet to the launchpad
                </div>
                <div className="button">
                    <Button variant="contained">Buy $RAX</Button>
                </div>
                <div className="buttons_block__wrapper">
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
            </div>
        </Box>
    );
};

export default ConverterBlock;