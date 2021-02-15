// ! we can't provide argument with catch block.... it can't throw internal error....it is fully supported with our modern browser....but old setup occur internal error...so we should use @babel/plugin-proposal-optional-catch-binding

// * without catch block's argument
try {
    console.log('line 1')
    console.log('line 2')
    console.log('line 3')
} catch {
    console.log('error occur')
}