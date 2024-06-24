import {Box} from "@mui/material";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import "../converter.css"

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 8,
    borderRadius: 20,
    backgroundColor: "transparent !important",
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : "#090A0E"],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 10,
        height: 8,
        background: "linear-gradient(144.30deg, rgb(39, 230, 92) 0.003%,rgb(88, 123, 255) 37.717%,rgb(181, 24, 255) 73.891%) !important;' : 'linear-gradient(144.30deg, rgb(39, 230, 92) 0.003%,rgb(88, 123, 255) 37.717%,rgb(181, 24, 255) 73.891%) !important;"
    },
}));

const Balance = () => {
    return (
        <div className="balance">
            <Box
                display="flex"
                alignItems="flex-start"
                justifyContent="space-between"
                className="balance__info"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    gap={2}
                >
                    <span className="lable">USD Raised:</span>
                    <div className="balance_count">
                        <span>$171,522</span>
                        <span>/</span>
                        <span>$600,000</span>
                    </div>
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    gap={1}
                >
                    <div className="balance_stat">
                        <span>68,608,979</span>
                        <span>/</span>
                        <span>$75m</span>
                    </div>
                    <span className="lable">$RAX Sold</span>
                </Box>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                sx={{gap: "12px"}}
                className="progress"
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <span className="progress_info">
                        <span className="lable">Stage</span>
                        1/10: Seed Round
                    </span>
                    <span className="progress_info">
                        <span className="lable">Target:</span>
                         $187,500
                    </span>
                </Box>
                <Box className="progress_bar">
                    <BorderLinearProgress variant="determinate" value={80} />
                </Box>
            </Box>
        </div>
    );
};

export default Balance;