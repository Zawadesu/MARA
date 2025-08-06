# Web Script

## Home

### About MARA

MARA(Metabolsim of Arachidonic acid in Ageing) is a python-based model for prediction of expression level changes of the arachidonic acid metabolism pathway related genes in ageing.The model is able to achieve relatively precise prediction in the organ level, and it's now available for humans' liver. 

The model data is sourced from GTEx (v10). Users can simply type their ages to get the expression level of AA metabolism related genes, and with these data as a reference, users can check if they are in a reasonable state and thus decide whether to intervent.

### Arachidonic acid

Arachinodonic acid (AA) is a 20-carbon polyunsaturated fatty acid found in the human body, which is widely found in the cell membrane of mammals. It is essential to maintain the fluidity and function of the cell membrane, and can be converted into a variety of bioactive substances through different metabolic pathways.

It can produce prostaglandins, thromboxanes, leukotrienes, etc., which are of great importance in physiological processed such as inflammatory response, pain perception, vasodilation, and so on. 

AA mainly takes part in three metabolic pathways: cyclooxygenase pathway (COX), lipoxidase pathway (LOX) as well as cytochrome P450 (CYP450). MARA focuses on these pathways.

## predictor

### Guidance

MARA is a python-based tool, using a hybrid model consisting of genetic programming (GP) algorithm and a deep learning method neural network (NN). To learn more about the GPNN model, please view the details (link) of the model part at the bottom.

To use the model, please click on the organ of interest, and then enter your age. It may take a few moments to get the results.

NOTE: the unit is TPM (Transcript per Kilobase per Million mapped reads, a commonly used unit of gene expression levels) and data is processed in log_2(tpm+0.001) form. 

### Model

#### Genetic Programming

Tranditionally, machine learing algorithms are designated to solve a deterministic problem, i.e., the developer inputs some features, then the algorithm uses various optimization methods to adjust the parameters, and eventually obtaining the best set of parameters that fit both the training samples and the test samples. 

On the contrast, genetic programming creates a program that attempts to automatically construct the best program to solve a certain problem. Essentially, the GP algorithm constructs an algorithm that can construct algorithms.