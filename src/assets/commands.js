const commands = [
  {
    name: 'btfs.p2p.init',
    description: 'Initialize a P2P connection with a peer using a specific protocol.',
    signature: `(protocol: string, peerId: string) => Promise<void>`,
  },
  {
    name: 'btfs.p2p.ls',
    description: 'List all active P2P connections.',
    signature: `() => Promise<string[]>`,
  },
  {
    name: 'btfs.p2p.listen',
    description: 'Subscribe to incoming messages on a protocol from a peer.',
    signature: `(protocol: string, peerId: string, dataFunc: (msg, from) => void) => Promise<() => void>`,
  },
  {
    name: 'btfs.p2p.send',
    description: 'Send a message to a peer over a given protocol.',
    signature: `(protocol: string, peerId: string, message: string) => Promise<any>`,
  },
  {
    name: 'btfs.swarm.peers',
    description: 'Fetch the list of connected swarm peers.',
    signature: `() => Promise<string[]>`,
  },
  {
    name: 'btfs.ping',
    description: 'Ping a peer to check its availability and latency.',
    signature: `(peerId: string) => Promise<any>`,
  },
  {
    name: 'btfs.pubsub.pub',
    description: 'Publish a message to a pubsub topic.',
    signature: `(topic: string, message: string) => Promise<any>`,
  },
  {
    name: 'btfs.pubsub.sub',
    description: 'Subscribe to a pubsub topic and handle messages.',
    signature: `(topic: string, onData: (msg) => void, onError?: (err) => void) => Promise<() => void>`,
  },
];

export default  commands;