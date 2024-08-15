import useBreackPoint from "../../hooks/useBreakPoint"

const UseMediaQuery = () => {
    const {isPc,isTablet,isMobile}=useBreackPoint();
    return (
        <div>
            {isPc && <p>is pc</p>}
            {isTablet && <p> isTablet</p>}
            {isMobile && <p> isMobile</p>}

        </div>
    )
}

export default UseMediaQuery