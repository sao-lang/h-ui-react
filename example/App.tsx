import React from 'react';
import { Icon, Button } from '@h-ui-react/components';
const App = () => {
    return (
        <div className="App">
            <div>
                <h3>Icon</h3>
                <Icon
                    type="LoadingThree"
                    theme="multi-color"
                    size={24}
                    fill={['#f61689', '#3d1e44', '#415294', '#3dda87']}
                    strokeLinecap="butt"
                />
                <Icon loading />
            </div>
            <div>
                <h3>Button</h3>
                <div>
                    <h4>不同类型</h4>
                    <Button loading plain type="primary">
                        primary
                    </Button>
                </div>
            </div>
            <div>
                <h3>ButtonGroup</h3>
                <div style={{ margin: '30px' }}>
                    <Button.Group
                        size="small"
                        type="primary"
                        circle
                        bordered
                        direction="vertical"
                    >
                        <Button>1234</Button>
                        <Button type="warning" round>
                            34132
                        </Button>
                        <Button type="primary" text round>
                            343543
                        </Button>
                    </Button.Group>
                    <Button.Group
                        size="small"
                        type="primary"
                        circle
                        bordered
                        direction="horizental"
                    >
                        <Button>1234</Button>
                        <Button type="warning" round>
                            34132
                        </Button>
                        <Button type="primary" text round>
                            343543
                        </Button>
                    </Button.Group>
                </div>
            </div>
        </div>
    );
};

export default App;
