


export let TheSlice = (name: string, Max: number = 20) => {

    if (name.length > Number(10)) {

        return name.slice(1, Max) + "..."

    }

    return name
}