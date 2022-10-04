import {FC, useContext} from 'react'
import {MdClear} from 'react-icons/md'
import {GameContext} from '../../contexts/GameContext'
import './Legend.sass'

const Legend:FC = () => {
    
const context = useContext(GameContext);
    return (
    <div className="legend">
        <MdClear onClick={()=>context?.setShowLegend(false)}/>
        <h3>Color Indicators</h3>
        <div className="legend__box">
            <div className="legend__box-item green">
                <p>Correct</p>
            </div>
            <div className="legend__box-item orange">
                <p>Partial</p>
            </div>
            <div className="legend__box-item red">
                <p>Incorrect</p>
            </div>
        </div>
    </div>
  )
}

export default Legend