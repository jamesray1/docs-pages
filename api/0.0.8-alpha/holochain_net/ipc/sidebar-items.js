initSidebarItems({"constant":[["DEFAULT_HEARTBEAT_MS","how often should we send a heartbeat if we have not received msgs"],["DEFAULT_HEARTBEAT_WAIT_MS","when should we close a connection due to not receiving remote msgs"]],"enum":[["TransportEvent","events that can be generated during a connection `poll()`"]],"mod":[["errors","This module holds net_ipc custom error types."],["spawn","This is a helper function to manage spawning an IPC sub-process This process is expected to output some specific messages on its stdout that we can process to know its launch state"],["util","This module holds util functions, such as constructing time related values"]],"struct":[["TransportError","represents an error generated by a connection instance"],["TransportWss","A \"Transport\" implementation based off the websocket protocol any rust io Read/Write stream should be able to serve as the base"]],"trait":[["Transport","represents a pool of connections to remote nodes"]],"type":[["DidWork","type name for a bool indicating if work was done during a `poll()`"],["TransportResult","a result object whos error is a TransportError instance"]]});