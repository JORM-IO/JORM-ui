import React from 'react';
import * as RxPopover from '@radix-ui/react-popover';
import './styles.css';

export function Popover(props) {
    const [_props, setProps] = React.useState(props);

    React.useEffect(() => {
        setProps(props);
    }, [props]);


    return (
        <RxPopover.Root>
            <RxPopover.Trigger className="PopoverTrigger">{props.label}</RxPopover.Trigger>
            <RxPopover.Portal>
                <RxPopover.Content className="PopoverContent">
                    {{...props.children}}
                    <RxPopover.Arrow className="PopoverArrow" />
                </RxPopover.Content>
            </RxPopover.Portal>
        </RxPopover.Root>
    )
}

export function PopoverDemo() {
    return (
        <Popover label="Popover">
            <div>Popover Content</div>
        </Popover>
    )
}