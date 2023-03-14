import React from 'react';
import api from './api';
import CodeEditor from '@uiw/react-textarea-code-editor';

import { PopoverDemo } from './Popover';

const keys = [
    'Popover',
    'Popover',
]

function App() {
    const [activeKey, setActiveKey] = React.useState('Popover');
    const [css, setCss] = React.useState('');
    
    React.useEffect(() => {
        const fetchData = async () => {
            const data = await api.read(activeKey);
            setCss(data[0].css);
        };
        fetchData();
    }, [activeKey]);

    React.useEffect(() => {
        const styleSheet = document.createElement('style')
        styleSheet.type = 'text/css'
        styleSheet.innerText = css
        document.head.appendChild(styleSheet)
        return () => {
            document.head.removeChild(styleSheet)
        }
    }, [css])

    return (
        <div className="visualizer">
            <div className="visualizer__nav">
                <div className="visualizer__nav__items">
                    {keys.map(key => (
                        <div
                            key={key}
                            className={`visualizer__nav__item ${key === activeKey ? 'active' : ''}`}
                            onClick={() => setActiveKey(key)}
                        >
                            {key}
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="visualizer__content">
                <div className="visualizer__content__component">
                    {activeKey === 'Popover' && <PopoverDemo />}
                </div>

                <div className="visualizer__content__css">
                    <CodeEditor
                        value={css}
                        language="css"
                        placeholder="Please enter code."
                        onChange={(evn) => setCss(evn.target.value)}
                        padding={15}
                        style={{
                            fontSize: 14,
                            backgroundColor: "#f5f5f5",
                            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                            height: '100%',
                            width: '40vw',
                            resize: 'none',
                            border: '2px solid transparent',
                            overflow: 'auto',
                        }}
                    />
                </div>
            </div>



        </div>
    );
}

export default App;
