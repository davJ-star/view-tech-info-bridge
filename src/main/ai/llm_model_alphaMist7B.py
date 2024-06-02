from transformers import AutoModel
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")  # Use GPU if available
model = AutoModel.from_pretrained("Alphacode-AI/AlphaMist7B-slr-v2", device=device)
model.eval()  # Set model to evaluation model