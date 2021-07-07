let column = [
    {
        prop: 'Type',
        label: '',
        width: 'auto'
    },
    {
        prop: 'EnvSteps',
        label: ' Env Steps',
        width: 'auto'
    },
    {
        prop: 'Ours',
        label: 'Ours',
        width: 'auto'
    },
    {
        prop: 'Tianshou',
        label: 'Tianshou',
        width: 'auto'
    },
    {
        prop: 'Rllib',
        label: 'Rllib',
        width: 'auto'
    },
    {
        prop: 'Sb3',
        label: 'Sb3',
        width: 'auto'
    }
]

let tableData = [
        {
            Type: 'Pong',
            EnvSteps: '10M',
            Ours: '20',
            Tianshou: '20',
            Rllib: 'n/a',
            Sb3: '20'
        },
        {
            Type: 'Qbert',
            EnvSteps: '10M',
            Ours: '17866',
            Tianshou: '7307',
            Rllib: '7968',
            Sb3: '9496'
        },
        {
            Type: 'Space Invaders',
            EnvSteps: '10M',
            Ours: '1880',
            Tianshou: '812',
            Rllib: '1001',
            Sb3: '622'
        }
    ]